let baseUrl = "";
if (process.env.NODE_ENV === 'development') {
	// 开发环境
	baseUrl = "http://10.250.151.117:9002/property-right-api/";
} else {
	// 生成环境
	baseUrl = "http://10.250.151.117:9002/property-right-api/";
}
export default baseUrl;
