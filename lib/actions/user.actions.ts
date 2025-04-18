'use server'

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({ email,password }) => {
    try {
        //  Mutation / Database / Make Fetch
        const { account } = await createAdminClient();
        const response = await account.createEmailPasswordSession(email,password);

        return parseStringify(response);
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

          const session = await account.createEmailPasswordSession(email, password);
      
          cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });

        return parseStringify(newUserAccount);

    } catch (error) {
        throw error;
    }
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const user = await account.get();

      return parseStringify(user);
    } catch (error) {
      return null;
    }
  }
  