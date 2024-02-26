import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionProductDetails() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-2xl hover:no-underline hover:text-gray-600">Shipping & Returns</AccordionTrigger>
        <AccordionContent className="f">
          <span className="font-bold text-xl pr-2">Canada & USA -</span>
          <span className="text-lg">
            Free standard shipping on orders over $250 with free returns.
            Expedited shipping is available regionally with a 1 -2 business day
            processing window.
          </span>
        </AccordionContent>
        <AccordionContent className="f">
          <span className="font-bold text-xl pr-2">
            France & United Kingdom -
          </span>
          <span className="text-lg">
            Free standard shipping on orders over €250 & £200 respectively.
            Conditions apply
          </span>
        </AccordionContent>
        <AccordionContent className="f">
          <span className="font-bold text-xl pr-2">Other markets -</span>
          <span className="text-lg">
            View our Shipping policy page for full details. Contact us at
            customerserive@nordarun.com.
          </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
