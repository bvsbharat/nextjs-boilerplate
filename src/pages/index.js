import { useEffect } from "react";
import { useRouter } from "next/router";
// import

export default function Index() {
    const router = useRouter();
    useEffect(() => {
        router.push("/dashboard");
    });
    return <div />;
}
