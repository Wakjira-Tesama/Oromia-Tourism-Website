import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import RegistrationForm from "../../components/form/form-elements/RegistrationForm";
import PaymentPage from "../../components/form/form-elements/PaymentPage";
import DropzoneComponent from "../../components/form/form-elements/DropZone";

import PageMeta from "../../components/common/PageMeta";

export default function FormElements() {
  return (
    <div>
      <PageMeta
        title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="From Elements" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <RegistrationForm />
        </div>
        <div className="space-y-6">
          <PaymentPage />

          <DropzoneComponent />
        </div>
      </div>
    </div>
  );
}
