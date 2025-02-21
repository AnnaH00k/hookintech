import { DEFAULT_AZUBEE_IDEA, COMPONENTS_IDEA } from "../../constants";
import IdeaPageClient from "./IdeaPageClient";

export function generateStaticParams() {
  return [
    { id: DEFAULT_AZUBEE_IDEA.id },
    { id: COMPONENTS_IDEA.id }
  ];
}

export default function IdeaPage({ params }: { params: { id: string } }) {
  return <IdeaPageClient params={params} />;
}
