use anchor_lang::prelude::*;

declare_id!("gLAM4vk4BJnExLP1gw9TDhgzFAgd8cJaQL7EGjimTdm");

#[program]
pub mod otter {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
