import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { set } from "../redux";
import { Layout } from "@components";

export default function Dashboard() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(set("data", { data: "loading data" }));
    }, []);

    return (
        <Layout>
            <h1>Dashboard page</h1>
        </Layout>
    );
}
