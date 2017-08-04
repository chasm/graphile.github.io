webpackJsonp([0x81b8806e42603000],{"./node_modules/json-loader/index.js!./.cache/json/index.json":function(n,a){n.exports={data:{remark:{html:'<header>\n<div class=\'container\'>\n<h1 id="build-powerful-graphql-apis"><a href="#build-powerful-graphql-apis" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build Powerful GraphQL APIs</h1>\n<p class=\'lead\'>\nThe Graphile suite of Node.js modules provide you with the tools to rapidly\nbuild high-performance extensible GraphQL APIs by combining plugins and using\nadvanced look-ahead features.\n</p>\n<div class=\'row\'>\n<div class=\'col-lg-6 col-12\'>\n<p>Build your schema with plugins  </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">buildSchema</span><span class="token punctuation">(</span>plugins<span class="token punctuation">)</span>\n \n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code>type Person <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token comment" spellcheck="true"># @deprecated Use \'name\' instead</span>\n</span>  <span class="token comment" spellcheck="true"># The person\'s first name</span>\n  <span class="token attr-name">firstName</span><span class="token punctuation">:</span> String\n\n  <span class="token comment" spellcheck="true">#...</span>\n</code></pre>\n      </div>\n</div><!-- /col-6 -->\n<div class=\'col-lg-6 col-12\'>\n<p>Transform your schema with ease  </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">buildSchema</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>plugins<span class="token punctuation">,</span>\n  DeprecateFromCommentPlugin<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code>type Person <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true"># The person\'s first name</span>\n<span class="gatsby-highlight-code-line">  <span class="token attr-name">firstName</span><span class="token punctuation">:</span> String <span class="token directive function">@deprecated</span><span class="token punctuation">(</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token attr-name">reason</span><span class="token punctuation">:</span> <span class="token string">"Use \'name\' instead"</span><span class="token punctuation">)</span>\n</span>\n  <span class="token comment" spellcheck="true">#...</span>\n</code></pre>\n      </div>\n</div><!-- /col-6 -->\n</div><!-- /row -->\n</div><!-- /container -->\n</header>\n<!-- **************************************** -->\n<section class=\'odd\'>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-12\'>\n<h1 id="straightforward-integration"><a href="#straightforward-integration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Straightforward Integration</h1>\n<p class=\'lead\'>\nIf you\'re already building with the reference implementation of GraphQL from\nFacebook then adding hooks is fairly straightforward:\n</p>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-12 col-lg-6\'>\n<p><code>graphql</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> MyType <span class="token operator">=</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">new</span> <span class="token class-name">GraphQLObjectType</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n</span>    name<span class="token punctuation">:</span> <span class="token string">\'MyType\'</span><span class="token punctuation">,</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token comment" spellcheck="true">// ...</span>\n</code></pre>\n      </div>\n</div><!-- /col-6 -->\n<div class=\'col-12 col-lg-6\'>\n<p><code>graphile-build</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> MyType <span class="token operator">=</span>\n<span class="gatsby-highlight-code-line">  <span class="token function">newWithHooks</span><span class="token punctuation">(</span>GraphQLObjectType<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n</span>    name<span class="token punctuation">:</span> <span class="token string">\'MyType\'</span><span class="token punctuation">,</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token comment" spellcheck="true">// ...</span>\n</code></pre>\n      </div>\n</div><!-- /col-6 -->\n</div><!-- /row -->\n</div><!-- /container -->\n</section><!-- /odd -->\n<!-- **************************************** -->\n<section class=\'even\'>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-4 col-fa hidden-md-down\'><i class=\'fa fa-handshake-o\' aria-hidden="true"></i></div>\n<div class=\'col-12 col-lg-8\'>\n<h1 id="fully-compatible"><a href="#fully-compatible" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fully compatible</h1>\n<p class=\'lead\'>\nWe use the reference GraphQL implementation under the hood, so you know we\'re spec compliant.\n</p>\n<p> You can use regular GraphQL objects from other libraries in your generated\nschema - you only need to change the parts of your code that you wish to trigger hooks for.</p>\n</div>\n</div><!-- /row -->\n</div><!-- /container -->\n</section><!-- /even -->\n<!-- **************************************** -->\n<section class=\'odd\'>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-12 col-lg-8\'>\n<h1 id="first-class-schema-watching"><a href="#first-class-schema-watching" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>First class schema watching</h1>\n<p class=\'lead\'>\nAutomatically update your running GraphQL schema without the need to restart the server.\n</p>\n<p>For example: when your underlying data structure changes your Graphile-Build\nplugins can trigger a rebuild event and you\'ll automatically be supplied with a\nfresh new GraphQL schema to replace the out-of-date one - no need to restart\nyour server!</p>\n</div><!-- /col-9 -->\n<div class=\'col-4 col-fa hidden-md-down\'><i class=\'fa fa-refresh\' aria-hidden="true"></i></div>\n</div><!-- /row -->\n</div><!-- /container -->\n</section><!-- /odd -->\n<!-- **************************************** -->\n<section class=\'even\'>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-4 col-fa hidden-md-down\'><i class=\'fa fa-rocket\' aria-hidden="true"></i></div>\n<div class=\'col-12 col-lg-8\'>\n<h1 id="performance-baked-in"><a href="#performance-baked-in" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Performance baked in</h1>\n<p class=\'lead\'>\nSay Goodbye to the N+1 problem; fewer round-trips means higher performance.\n</p>\n<p>By using our lookahead tools your code can know what\'s coming and make sure it\nrequests the correct fields ahead of time, leading to fewer round-trips and\nhigher performance.</p>\n<p>PostGraphQL v4 utilises this functionality to enable it to serve even deeply\nnested requests with just one SQL query, which lead to significant speedups\nespecially where database connection latency was above 1ms.</p>\n</div><!-- /col-12 -->\n</div><!-- /row -->\n</div><!-- /container -->\n</section><!-- /odd -->\n<!-- **************************************** -->\n<section class=\'odd\'>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-12 col-lg-8\'>\n<h1 id="data-store-independent"><a href="#data-store-independent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Data-store independent</h1>\n<p class=\'lead\'>\nBuild plugins for anything that Node.js can communicate with.\n</p>\n<p>We treat GraphQL as a first-class citizen - everything is modelled around\nGraphQL, so any backend technology is possible.</p>\n<p>We already have extensive support for PostgreSQL through the\n<code>graphile-build-pg</code> module; the plugins therein performs introspection of your\ndatabase schema and automatically build the relevant GraphQL objects and fields\nbased on the tables, columns, functions, relations that it finds in your\ndatabase - no need to create them manually!</p>\n</div>\n<div class=\'col-4 col-fa hidden-md-down\'><i class=\'fa fa-database\' aria-hidden="true"></i></div>\n</div><!-- /row -->\n</div><!-- /container -->\n</section><!-- /odd -->\n<!-- **************************************** -->\n<section class=\'even\'>\n<div class=\'container\'>\n<div class=\'row justify-content-center\'>\n<div class=\'text-center\'>\n<h1 id="quick-to-start"><a href="#quick-to-start" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quick to start</h1>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> buildSchema<span class="token punctuation">,</span> defaultPlugins <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"graphile-build"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> printSchema <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"graphql/utilities"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">buildSchema</span><span class="token punctuation">(</span>defaultPlugins<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">printSchema</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class=\'d-flex justify-content-center\'>\n<a class=\'btn btn-primary btn-lg\' href=\'/graphile-build/getting-started/\'>Get started &raquo;</a>\n</div>\n</div><!-- /col-12 -->\n</div><!-- /container -->\n</section><!-- /even -->\n<!-- **************************************** -->',frontmatter:{path:"/",title:"Extensible GraphQL APIs through Plugins"}}},pathContext:{layout:"marketing"}}}});
//# sourceMappingURL=path---index-9b314ae545450ea054c5.js.map