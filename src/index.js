// src/index.js：Cloudflare Workers 基础入口代码
export default {
  // fetch 是 Workers 的核心事件，处理所有请求
  async fetch(request, env, ctx) {
    // 返回一个简单的响应，测试部署是否正常
    return new Response("Hello from Cloudflare Workers!", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};
