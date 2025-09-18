// import React from "https://esm.sh/react@^18.3.1"
import ListingsGrid from "../components/listings/ListingsGrid";
import PageLayout from "../components/shared/Layouts/PageLayout";

function Home() {
  return (
    <PageLayout pageName={"Home"}>
      <ListingsGrid />
    </PageLayout>
  );
}

export default Home;
