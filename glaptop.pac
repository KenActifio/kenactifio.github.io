function FindProxyForURL(url, host)
{
	if (shExpMatch(host, "*.actifio.com") || shExpMatch(host, "172.*"))
	{
		return "SOCKS5 127.0.0.1:1080";
	}
	return "DIRECT";
}
