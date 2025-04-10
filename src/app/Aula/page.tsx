import ClassroomForm from "@/components/others/formulariodeAula";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom Management System",
  description: "Create and manage classroom resources",
};

export default function Aula() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Classroom Management System</h1>
        <p className="text-muted-foreground max-w-2xl">
          Use this form to register a new classroom in our system. Please
          provide all the required information to ensure proper resource
          allocation and scheduling.
        </p>
      </div>

      <ClassroomForm />
    </div>
  );
}
