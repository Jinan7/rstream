<h1>Cargo generate template for creating rust actix-web server skeleton project</h1>
<p>Generates a simple rust actix-web server with health check route</p>
<h2>Skeleton</h2>
<ul>
  <li>
    <div>
      <p>configuration/</p>
      <ul>
        <li>base.yaml</li>
        <li>local.yaml</li>
        <li>production.yaml</li>
      </ul>
    </div>
  </li>
  <li>
    <div>
      <p>scripts/</p>
      <ul>
        <li>init_db.sh</li>
        <li>init_redis.sh</li>
      </ul>
    </div>
  </li>
  <li>
    <div>
      <p>src/</p>
      <ul>
        <li>
          <div>
            <p>routes/</p>
            <ul>
              <li>health_check.rs</li>
              <li>mod.rs</li> 
            </ul>
          </div>
        </li>
        <li>configuration.rs</li>
        <li>lib.rs</li>
        <li>main.rs</li>
        <li>startup.rs</li>
      </ul>
    </div>
  </li>
  <li>.gitignore</li>
  <li>Cargo.lock</li>
  <li>Cargo.toml</li>
</ul>
<h2>Usage</h2>
<p><code>cargo generate --git https://github.com/Jinan7/actix-web-server --name {server_name}</code></p>
<p>Enter port you want server to listen on when prompted</p>
<p><code>listen on port: {server_port}</code></p>
<p>Enter database name when prompted</p>
<p><code>db_name: {db_name}</code></p>

