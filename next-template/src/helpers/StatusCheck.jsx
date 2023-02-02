import { useEffect } from "react";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const StatusCheck = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (sessionData?.error === "inactive-user") {
      // Sign out here
      signOut();
    }
  }, [sessionData?.error, router.asPath]);
  return null;
};
