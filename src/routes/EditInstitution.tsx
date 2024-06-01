import { useParams } from "react-router-dom";
import InstitutionUpdateForm from "../ui-components/InstitutionUpdateForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

export default function EditInstitution() {
  const params = useParams();
  return (
    <div className={`flex-1 overflow-y-auto p-[12px]`}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/institutions">Institutions</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Edit Institution</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className={`text-[24px] font-semibold`}>Edit Institution</h1>
      <InstitutionUpdateForm id={params.id} />
    </div>
  );
}
