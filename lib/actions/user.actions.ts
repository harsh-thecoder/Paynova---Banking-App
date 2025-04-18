'use server'

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async () => {
    try {
        //  Mutation / Database / Make Fetch
    } catch (error) {
        console.error('Error',error);
    }
}

export const signUp = async (userData : SignUpParams) => {
    const {email, password, firstName, lastName} = userData;

    let newUserAccount;
    try {
        //  Create a user account
        const { account } = await createAdminClient();

            newUserAccount = await account.create(
            ID.unique(),
            email, 
            password, 
            `${firstName} ${lastName}`
        );

          if(!newUserAccount) throw new Error('Error creating user')

          const session = await account.createEmailPasswordSession(email, password);
      
          cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });

        console.log("Created new user:", newUserAccount);
        return parseStringify(newUserAccount);

    } catch (error) {
        console.error('SignUp Error',error);
        throw error;
    }
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }
  