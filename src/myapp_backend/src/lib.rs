use ic_cdk::api;
use ic_cdk::{export_candid, query, update};
use serde::{Deserialize, Serialize };
use candid:: CandidType;
mod user;
use user::User;

#[derive(Serialize, Deserialize, Clone, CandidType)]
struct UserData {
    principal: String,
}

#[query]
fn greet(name: String) -> String {
    // "Welcome to the Rust-based IC service!".to_string()
    format!("Welcome {} to the Rust-based IC service! ",name)
}

#[update]
fn user_info() -> UserData {
    let caller = api::caller();
    UserData {
        principal: caller.to_text(),
    }
}

export_candid!();