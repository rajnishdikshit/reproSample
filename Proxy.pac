function findProxyForURL (url, host)
{
	url = url.toLowerCase();
	host = host.toLowerCase();
	clientIP = myIpAddress();

	If(shExpMatch(clientIP, "192.168.*"))
	{
		return mybogusproxy.com;
	}

	return "Direct";
}