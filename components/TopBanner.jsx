import Marquee from "react-fast-marquee";
import { FiPhoneCall } from "react-icons/fi";
export default function TopBanner() {
  return (
    <div>
      <Marquee>
        <div className="flex items-center justify-between container mx-auto px-8 sm:py-4 gap-4">
          <div className="animate-pulse font-semibold">All in One Store</div>
          <p className="text-orange-600">Need help placing an order ?</p>
          <div className="flex font-bold space-x-2">
            <span>Call:</span>
            {/* <FiPhoneCall className="text-3xl" /> */}
            <span>0709 744 874</span>
          </div>
          <p className="text-orange-600">
            {" "}
            Located at Kireka Shopping Center Opposite Police
          </p>
        </div>
      </Marquee>
    </div>
  );
}
