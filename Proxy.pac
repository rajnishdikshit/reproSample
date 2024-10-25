	function FindProxyForURL(url, host) {
        url = url.toLowerCase();
        host = host.toLowerCase();
        clientIP = myIpAddress();
    
        if (shExpMatch(clientIP, "10.32.*")) {
            return "PROXY mybogusproxy.com";
        }
    
        return "DIRECT";
    }
    