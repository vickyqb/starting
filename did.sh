cargo build --release --target wasm32-unknown-unknown --package myapp_backend

candid-extractor target/wasm32-unknown-unknown/release/myapp_backend.wasm >src/myapp_backend/myapp_backend.did