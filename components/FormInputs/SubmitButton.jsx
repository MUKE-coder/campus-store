import { Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function SubmitButton({
  isLoading = false,
  buttonTitle,
  loadingButtonTitle,
}) {
  return (
    <div className="sm:col-span-1 mt-4">
      {isLoading ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingButtonTitle}
        </Button>
      ) : (
        <Button type="submit">
          <Plus className="w-5 h-5 mr-2" />
          <span> {buttonTitle}</span>
        </Button>
      )}
    </div>
  );
}
