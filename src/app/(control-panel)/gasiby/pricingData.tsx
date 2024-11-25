import React from "react"; // Ensure React is imported
import Typography from "@mui/material/Typography";
import { ModernPricingItemType } from "./ModernPricingItemType";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Checkbox from "@mui/material/Checkbox";
const FeatureItem = ({ title }: { title: string }) => (
  <div className="flex">
    <Checkbox checked className="p-0 text-green-300 checked:text-green-700" />
    <FuseSvgIcon className="text-green-600" fontSize="small" />
    <Typography className="ml-2 leading-5">
      <b>{title}</b>
    </Typography>
  </div>
);

const pricingData: ModernPricingItemType[] = [
  {
    period: "month",
    title: "Basic",
    subtitle: "Up to 10,000 API calls /month ",
    negotiable: "Post limit charges $0.005 per API call",
    Feauture: (
      <div className="mt-16 space-y-8">
        <FeatureItem title=" Access to basic data endpoints" />
        <FeatureItem title=" Standard resolution images" />
        <FeatureItem title=" Email support with 24-hour response time" />
        <FeatureItem title=" Dedicated account manager" />
        <FeatureItem title=" Service Level Agreement (SLA) with  uptime guarantee" />
      </div>
    ),
    Limitation: (
      <div className="mt-16 space-y-8">
        <FeatureItem title="Access to basic data endpoints" />
        <FeatureItem title=" Standard resolution images" />
      </div>
    ),
    yearlyPrice: "9.00",
    monthlyPrice: "49",
    details: (
      <div className=" mt-16 space-y-8">
        <FeatureItem title=" Startups and small businesses needing essential media data with moderate usage" />
      </div>
    ),
    description: undefined,
  },
  {
    period: "month",
    title: "Standard",
    subtitle: "Up to 1,00,000 API calls /month ",
    negotiable: "Post limit charges $0.003 per API call",
    Feauture: (
      <div className="mt-16 space-y-8">
        <FeatureItem title=" Access to all data endpoints, including advanced data (cast, episode info)" />
        <FeatureItem title=" High-resolution images" />
        <FeatureItem title=" Priority email support with 12-hour response time" />
        <FeatureItem title=" Dedicated account manager" />
        <FeatureItem title=" Service Level Agreement (SLA) with  uptime guarantee" />
      </div>
    ),
    Limitation: (
      <div className="mt-16 space-y-8">
        <FeatureItem title=" Rate limiting: 10 requests per second" />
        <FeatureItem title=" Excludes high-resolution images and advanced data" />
      </div>
    ),
    yearlyPrice: "49.00",
    monthlyPrice: "199",
    details: (
      <div className="mt-16 space-y-8">
        <FeatureItem title=" Growing companies requiring comprehensive data and higher usage limits" />
      </div>
    ),
    description: undefined,
  },
  {
    period: "month",
    title: "Premium",
    subtitle: "Up to 5,00,000 API calls /month ",
    negotiable: "Post limit charges $0.001 per API call",
    Feauture: (
      <div className="mt-16 space-y-8">
        <FeatureItem title=" Full access to all data endpoints" />
        <FeatureItem title=" Ultra high-resolution images" />
        <FeatureItem title=" Priority support with 4-hour response time" />
        <FeatureItem title=" Dedicated account manager" />
        <FeatureItem title=" Service Level Agreement (SLA) with 99.9% uptime guarantee" />
      </div>
    ),
    Limitation: (
      <div className="mt-16 space-y-8">
        <FeatureItem title=" Rate limiting: 20 requests per second" />
        <FeatureItem title=" Excludes high-resolution images and advanced data" />
      </div>
    ),
    yearlyPrice: "12.00",
    monthlyPrice: "499",
    isPopular: true,
    details: (
      <div className="mt-16 space-y-8">
        <FeatureItem title="Established businesses with high data demands and the need for dedicated support" />
      </div>
    ),
    description: undefined,
  },
  {
    period: "month",
    title: "Enterprise",
    subtitle: "Over 5,00,000 API  calls /month ",
    negotiable: "(negotiable)",
    Feauture: (
      <div className="mt-16 space-y-8">
        <FeatureItem title=" All Premium Plan features" />
        <FeatureItem title=" Customized API solutions and endpoint development" />
        <FeatureItem title=" 24/7 dedicated support" />
        <FeatureItem title=" Tailored SLA agreements" />
        <FeatureItem title=" Bulk data access and custom data feeds" />
      </div>
    ),
    Limitation: (
      <div className="mt-16 space-y-8">
        <FeatureItem title=" Rate limiting adjusted based on needs" />
        <FeatureItem title="Excludes high-resolution images and advanced data" />
      </div>
    ),
    yearlyPrice: "49.00",
    monthlyPrice: "69.00",
    buttonTitle: "Choose plan",
    details: (
      <div className="mt-16 space-y-8">
        <FeatureItem title="Large enterprises with specific requirements and extremely high usage" />
      </div>
    ),
    description: undefined,
  },
];

export default pricingData;
