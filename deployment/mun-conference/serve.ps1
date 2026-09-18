$port = 8085
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Prefixes.Add("http://127.0.0.1:$port/")

try {
    $listener.Start()
    Write-Host "=========================================================="
    Write-Host " S.H.I.E.L.D. TACTICAL SERVER LIVE AT: http://localhost:$port/"
    Write-Host "=========================================================="

    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $urlPath = $request.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrWhiteSpace($urlPath) -or $urlPath -eq "/") { 
                $urlPath = "index.html" 
            }

            $localPath = Join-Path $PSScriptRoot $urlPath.Replace('/', '\')
            
            if (Test-Path $localPath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
                $mime = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".css"  { "text/css; charset=utf-8" }
                    ".js"   { "application/javascript; charset=utf-8" }
                    ".json" { "application/json; charset=utf-8" }
                    ".jpg"  { "image/jpeg" }
                    ".jpeg" { "image/jpeg" }
                    ".png"  { "image/png" }
                    ".svg"  { "image/svg+xml" }
                    ".webp" { "image/webp" }
                    default { "application/octet-stream" }
                }
                $response.ContentType = $mime
                $response.AddHeader("Access-Control-Allow-Origin", "*")

                $fileStream = [System.IO.File]::OpenRead($localPath)
                $fileStream.CopyTo($response.OutputStream)
                $fileStream.Close()
            } else {
                $response.StatusCode = 404
                $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 - Not Found")
                $response.ContentType = "text/plain; charset=utf-8"
                $response.OutputStream.Write($notFound, 0, $notFound.Length)
            }
        } catch {
            # Client disconnect or stream close handled gracefully
        } finally {
            try { $response.Close() } catch {}
        }
    }
} finally {
    if ($listener -and $listener.IsListening) {
        $listener.Stop()
    }
}
