// This will NOT work in a standard Next.js app
import dynamic from "next/dynamic";

// This 'childApp/TestComponent' path is made possible by Module Federation
const RemoteTestComponent = dynamic(() => import("http://localhost:64265/my-component-lib.es.js"));

export default function ComponentKedua() {
  return <RemoteTestComponent />;
}
