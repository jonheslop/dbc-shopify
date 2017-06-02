/**
 * Shopify Ajaxify Shop.
 *
 * @uses Modified Shopify jQuery API (link to it)
 *
 */

jQuery(document).ready(function() {
//Begin Wrapper

var jQ = jQuery;

/**
 * Collection of Selectors for various pieces on the page we need to update
 *
 * I've tried to keep these as general and flexible as possible, but
 * if you are doing your own markup, you may find you need to change some of these.
 *
 */
var selectors = {
    // Any elements(s) with this selector will have the total item count put there on add to cart.
    SUBMIT_ADD_TO_CART: '.addtocart input.submit',

    FORM_ADD_TO_CART: 'form.addtocart',
};


//Attach Submit Handler to all forms with the /cart/add action.
jQ(selectors.FORM_ADD_TO_CART).submit(function(e) {
    e.preventDefault();
    //So, in onItemAdded, we Shopify.getCart() to force the repaint of items in cart.
    Shopify.addItemFromForm(e.target);
});


//We only want to interrupt the UPDATE, not the CHECKOUT process
jQ(selectors.FORM_UPDATE_CART_BUTTON).click(function(e) {
    e.preventDefault();
    jQ(e.target.form).find(selectors.FORM_UPDATE_CART_BUTTONS).attr('disabled', true).addClass('disabled');
    Shopify.updateCartFromForm(e.target.form);
});


/**
 * Shopify.onItemAdded
 *
 * Triggered by the response when something is added to the cart via the add to cart button.
 * This is where you would want to put any flash messaging, for example.
 *
 */
Shopify.onItemAdded = function(line_item, form) {
    Shopify.getCart();
};

/**
 * This updates the N item/items left in your cart
 *  */
Shopify.onCartUpdate = function(cart, form) {
		jQ('#minicartwrap').load('../../ #miniandmicro', function(){
			$('body').addClass('just-updated');
    //   window.scrollTo(0, 0);
			$('.bookformat').prop('checked', false);
		});
};

//End Wrapper
});
