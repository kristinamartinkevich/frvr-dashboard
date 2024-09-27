import DefaultLayout from "@/layouts/default";
import Authentication from "@/module/authentication/Authentication";
import Dashboard from "@/module/dashboard/Dashboard";
import { useDashboardStore } from "@/store";

export default function IndexPage() {
  const { loggedIn } = useDashboardStore();

  return (
    <DefaultLayout>
      {!loggedIn ?
        (<>
          <Authentication />
        </>) :
        <Dashboard />
      }

    </DefaultLayout>
  );
}
