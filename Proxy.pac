	function FindProxyForURL(url, host) {
        url = url.toLowerCase();
        host = host.toLowerCase();
        clientIP = myIpAddress();
    
        if (shExpMatch(clientIP, "10.0.*")) {
            return "PROXY mybogusproxy.com";
        }
    
        return "DIRECT";
    }
    