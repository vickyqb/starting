use ic_cdk::{query, update};
use serde::{Deserialize, Serialize };
use candid:: CandidType;
use std::cell::RefCell;


#[derive(Serialize, Deserialize, Clone, CandidType)]
pub struct User {
    name: String,
    age: u32,
}


thread_local! {
    static USERS: RefCell<Vec<User>> = RefCell::new(Vec::new());
}


#[update]
fn create_new_user(name: String, age: u32) {
    let user = User { name, age };
    USERS.with(|users| {
        users.borrow_mut().push(user);
    });
}


#[query]
fn get_old_users() -> Vec<User> {
    USERS.with(|users| users.borrow().clone())
}
