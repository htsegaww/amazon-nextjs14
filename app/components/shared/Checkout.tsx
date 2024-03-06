"use client";
import { useAppSelector } from "@/hooks/redux";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutItem from "./CheckoutItem";
import CheckoutSection from "./CheckoutSection";
import CustomBox from "./CustomBox";
import CustomButton from "./CustomButton";
import { getCart } from "@/store/cartSlice";
import { Product } from "@/types/supabase";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  const cart = useAppSelector(getCart);

  let subtotal = 0;
  cart.forEach((item: Product) => (subtotal += item.price!));

  const totalTax = subtotal * 0.07;

  const orderTotal = subtotal + totalTax;
  return (
    <div>
      <CheckoutHeader items={cart.length} />
      <div className="flex mt-6 ">
        <div>
          <CheckoutSection number={1} title="Shipping Address">
            <div>
              <p>
                Harry Potter <br></br>123 Diagon Alley <br></br>London WC2H 9FB{" "}
                <br></br>United Kingdom
              </p>
            </div>
          </CheckoutSection>
          <CheckoutSection number={2} title="Payment Method">
            <div>
              Paying with Galleons <br></br>
              <span className="text-[#6195a5]">Billing address: </span>
              Harry Potter, 123 Diagon Alley...
            </div>
          </CheckoutSection>

          <CheckoutSection number={3} title=" Review items and shipping">
            <div className="flex flex-col mb-5">
              {cart.map((item: Product) => {
                return <CheckoutItem item={item} key={item.id} />;
              })}
              <div>
                <CustomBox
                  style={{
                    marginTop: "30px",
                    marginLeft: "-250px",
                    width: "100%",
                  }}
                >
                  <div className="flex w-[980px] justify-start items-center gap-10">
                    <div>
                      <CustomButton
                        onClick={() => {}}
                        style={{
                          backgroundColor: "#f6d829",
                          color: "black",
                          width: "12rem",
                          borderRadius: "20px",
                        }}
                      >
                        Place Your Order
                      </CustomButton>
                    </div>

                    <div>
                      <p className="text-[#b12705] font-bold text-lg">
                        Order Total: ${orderTotal.toFixed(2)}
                      </p>
                      <p className="text-xs">
                        By placing your order, you agree to Amazon&apos;s{" "}
                        <span className="text-[#387d91]">privacy notice </span>{" "}
                        and
                        <span className="text-[#387d91]">
                          conditions of use.
                        </span>
                      </p>
                    </div>
                  </div>
                </CustomBox>
              </div>
            </div>
          </CheckoutSection>
        </div>

        <OrderSummary
          subtotal={subtotal}
          tax={totalTax.toFixed(2)}
          total={orderTotal.toFixed(2)}
        />
      </div>
    </div>
  );
};

export default Checkout;
