import { createSignal, createEffect } from "solid-js";
import ContentDashboard from "~/partials/dashboard";
import ContentLayout from "~/partials/layout/content.layout.jsx";
import { UseAuthCtx } from "~/context/auth.context";

export default function Dashboard() {

  const {auth} = UseAuthCtx()

  createEffect(
    () => {
      console.log(auth())
    }
  )

  return (
    <ContentLayout title={"Dashboard"} >
      {auth() ? <ContentDashboard /> : <p>Loading...</p>}
    </ContentLayout>
  );
}