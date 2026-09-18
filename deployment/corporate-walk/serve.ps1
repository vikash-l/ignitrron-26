$port = 3002
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Prefixes.Add("http://127.0.0.1:$port/")
$listener.Start()
Write-Host "==========================================================" -ForegroundColor Red
Write-Host " CORPORATE WALK (BLACK WIDOW THEME) SERVER IS LIVE" -ForegroundColor White
Write-Host " URL: http://localhost:$port/" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Red

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($urlPath)) { 
            $urlPath = "index.html" 
        }

        $localPath = Join-Path $PSScriptRoot $urlPath
        if (Test-Path $localPath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $mime = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".png"  { "image/png" }
                ".svg"  { "image/svg+xml" }
                ".woff2"{ "font/woff2" }
                default { "application/octet-stream" }
            }
            $response.ContentType = $mime
            $response.ContentLength64 = [int64]$bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            $response.OutputStream.Close()
        } else {
            $response.StatusCode = 404
            $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentLength64 = [int64]$notFound.Length
            $response.OutputStream.Write($notFound, 0, $notFound.Length)
            $response.OutputStream.Close()
        }
    } catch {
        Write-Host "Error handling request: $_"
    }
}
