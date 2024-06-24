"use client"
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import GlobalApi from "@/app/api/GlobalApi";
import BusinessInfo from "@/components/BusinessInfo";
import BusinessDescription from "@/components/BusinessDescription";
import SimilarBusiness from "@/components/SimilarBusiness";

interface Business {
  id: string;
  name: string;
  about?: string;
  image?: { url: string }[];
  // Add other relevant fields as needed
}

const BusinessDetail = ({ params }: { params: { businessId: string } }) => {
  const { data, status } = useSession();
  const [businessDetails, setBusinessDetails] = useState<Business | null>(null);

  const checkUserAuthenticated = () => {
    if (status === "loading") {
      return <p>Loading........</p>;
    }
    if (status === "unauthenticated") {
      signIn("descope");
    }
  };

  useEffect(() => {
    checkUserAuthenticated();
  }, [status]);

  useEffect(() => {
    params && BusinessDetailsByID();
  }, [params]);

  const BusinessDetailsByID = () => {
    GlobalApi.getBusinessByID(params.businessId).then((resp) => {
      setBusinessDetails(resp.businessList);
    });
  };

  if (status === 'loading' || status === 'unauthenticated' || !businessDetails) {
    return <p>Loading...</p>; // Show loading state or handle unauthenticated state
  }

  return (
    <div className="py-8 md:py-20 padding-container">
      <BusinessInfo business={businessDetails} />
      <div className="grid grid-cols-3 mt-16">
        <div className="col-span-3 md:col-span-2 order-last md:order-first">
          <BusinessDescription business={businessDetails} />
        </div>
        <div>
          <SimilarBusiness business={businessDetails} />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;
