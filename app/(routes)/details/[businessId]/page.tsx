"use client"
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import GlobalApi from "@/app/api/GlobalApi";
import BusinessInfo from "@/components/BusinessInfo";
import BusinessDescription from "@/components/BusinessDescription";
import SimilarBusiness from "@/components/SimilarBusiness";

interface BusinessDetailProps {
    params: {
        businessId: string;
    };
}

interface Business {
    id: string;
    name: string;
    description: string;
    image: { url: string }[]; // Adjusted type
    address: string;
    email: string;
    contactPerson: string;
    // Add other fields as necessary
}

const BusinessDetail: React.FC<BusinessDetailProps> = ({ params }) => {
    const { data, status } = useSession();
    const [businessDetails, setBusinessDetails] = useState<Business | null>(null);

    console.log(params.businessId);

    const checkUserAuthenticated = () => {
        if (status === "loading") {
            return (<p>Loading........</p>);
        }
        if (status === "unauthenticated") {
            signIn("descope");
        }
    }

    useEffect(() => {
        checkUserAuthenticated();
    }, [status]);

    useEffect(() => {
        if (params) {
            BusinessDetailsByID();
        }
    }, [params]);

    const BusinessDetailsByID = async () => {
        try {
            const resp = await GlobalApi.getBusinessByID(params.businessId);
            setBusinessDetails(resp.businessList);
        } catch (error) {
            console.error("Error fetching business details:", error);
        }
    }

    return (
        status === 'authenticated' && businessDetails && (
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
        )
    );
}

export default BusinessDetail;
