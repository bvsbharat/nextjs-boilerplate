import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../redux/action";
import { Layout } from "@components";

export default function Dashboard() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setData({ data: "loading data" }));
    }, []);

    return (
        <Layout>
            <h1>Dashboard page</h1>
        </Layout>
    );
}
