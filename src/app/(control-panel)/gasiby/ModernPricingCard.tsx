import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import Chip from "@mui/material/Chip";
import ModernPricingItemType from "./ModernPricingItemType";
import ChooseButton from "./Button";

type ModernPricingCardProps = ModernPricingItemType & {
  className?: string;
};

/**
 * The modern pricing card component.
 */
function ModernPricingCard(props: ModernPricingCardProps) {
  const {
    period = "",
    title = "",
    subtitle = "",
    negotiable = "",
    Feauture = "",
    Limitation = "",
    yearlyPrice = "",
    monthlyPrice = "",
    buttonTitle = "",
    isPopular = false,
    details = "",
    className = "",
  } = props;

  return (
    <Paper
      className={clsx(
        "relative max-w-sm flex-col px-10 py-14 md:max-w-none",
        isPopular && "",
        className
      )}
      sx={[
        isPopular &&
          ((theme) => ({
            border: `1px solid ${theme.palette.secondary.main}!important`,
          })),
      ]}
    >
      {isPopular && (
        <div className="absolute inset-x-0 -top-16 flex items-center justify-center">
          <Chip
            label="POPULAR"
            color="secondary"
            className="flex h-32 items-center rounded-full px-32 text-center font-medium leading-none"
          />
        </div>
      )}
      <div className="items-center">
        <Typography className="text-center  text-purple-400 text-4xl font-bold leading-tight tracking-tight">
          {title}
        </Typography>
        <div className="flex flex-col items-center justify-center whitespace-nowrap">
          <div className="flex items-center">
            <Typography className="mr-12 text-3xl">$</Typography>
            <Typography className="text-6xl font-semibold">
              {period === "month" ? monthlyPrice : yearlyPrice}
            </Typography>
            <Typography className="text-grey-">/Month</Typography>
          </div>
        </div>
      </div>
      <div className="items-center text-center">
        <Typography
          className="mt-8 text-lg font-medium tracking-tight text-gray-500"
          color="text.secondary"
        >
          {subtitle}
        </Typography>
        <Typography
          className="mt-8 text-lg font-medium tracking-tight text-gray-500"
          color="text.secondary"
        >
          {negotiable}
        </Typography>
      </div>
      <div className="border-b-2 border-dashed border-accent my-20 w-full rounded" />
      <div className="">
        <div className="flex flex-col gap-4 w-full mb-4 h-[220px]">
          <Typography className="text-[16px] font-bold">Purpose:</Typography>
          <div className="flex items-start gap-4">
            <Typography className="text-[14px]">{Feauture}</Typography>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full mb-4 h-[120px] min-[1600px]:h-[110px] ">
          <Typography className="text-[16px] font-bold">
            Limitations:
          </Typography>
          <div className="flex items-start gap-4">
            <Typography className="text-[14px] text-black">
              {Limitation}
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full mb-4 h-[100px]">
          <Typography className="text-[16px] font-bold">Ideal For:</Typography>
          <div className="flex items-start gap-4">
            <Typography className="text-[14px]">{details}</Typography>
          </div>
        </div>
      </div>
      <div className="items-center pt-20 px-24">{ChooseButton()}</div>
    </Paper>
  );
}

export default ModernPricingCard;
