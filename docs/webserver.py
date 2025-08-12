from http.server import BaseHTTPRequestHandler, HTTPServer

def tprint(string=""):
    """Takes a string and prints it with a timestamp prefixt."""
    print('[{}] {}'.format(time.strftime("%Y-%m-%d %H:%M:%S"), string))

port = "23432"

# Start HTTP server
try:
    tprint(f"HTTP server on port {port} started")
    server_address = ('localhost', port)
    httpd = HTTPServer(server_address, SOAPRequestHandler)
    httpd.serve_forever()
except Exception as e:
    tprint(f"HTTP server not started: {e}")
    quit()
