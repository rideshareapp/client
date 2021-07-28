import React from "react";
import { MainAppGrid } from "../../components";

function Dashboard() {
    document.title = "Rideshareapp | Requests";

    let content =
        <div className="requests">
            <div>
                <h1>Requests</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>;

    return (
        <MainAppGrid content={content} />
    );
}

export default Dashboard;
