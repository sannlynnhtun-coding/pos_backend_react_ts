import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useBillingCartStore} from "@/store/billingCartStore.ts";
import {TProduct} from "@/type/type.ts";
import {useNavigate} from "react-router-dom";

type ProductOptionDropDownProp = {
    product: TProduct
}

export default function ProductOptionDropDown({product}: ProductOptionDropDownProp) {

    const {addToCart} = useBillingCartStore()
    const navigate = useNavigate();

    const addToCartBtnHandler = () => {
        addToCart(product, 1)
    }

    const editProductBtnHandler = () => {
        navigate("/products/edit")
    }

    const deleteProductBtnHandler = () => {
        navigate("/products/new")
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 128 512"
                     className={"aspect-square h-10 p-2 "}
                >
                    <path
                        d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                </svg>
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
                <DropdownMenuContent sideOffset={5}>
                    <DropdownMenuItem>
                        <Button className={"w-full"}  variant={"outline"} onClick={addToCartBtnHandler}>
                            Add to cart
                        </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Button  className={"w-full"} variant={"outline"} onClick={editProductBtnHandler}>Edit</Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Button className={"w-full"}  variant={"outline"} onClick={deleteProductBtnHandler}>Delete</Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenuPortal>
        </DropdownMenu>
    );
}