import { __ } from '@wordpress/i18n';

export default {
    id: 'enquiry_quote_exclusion',
    priority: 55,
    name: __("Exclusion", "woocommerce-catalog-enquiry"),
    desc: __("Exclusion Management", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        // {
        //     key: "woocommerce_userroles_list",
        //     type: "multi-select",
        //     label: __("User Role Specific Exclusion", "woocommerce-catalog-enquiry"),
        //     desc: __("Select the user roles, who won’t be able to send enquiry.", "woocommerce-catalog-enquiry"),
        //     options: appLocalizer.role_array
        // },
        // {
        //     key: "woocommerce_user_list",
        //     type: "multi-select",
        //     label: __("User Name Specific Exclusion", "woocommerce-catalog-enquiry"),
        //     desc: __("Select the users, who won’t be able to send enquiry.", "woocommerce-catalog-enquiry"),
        //     options: appLocalizer.all_users
        // },
        // {
        //     key: "woocommerce_product_list",
        //     type: "multi-select",
        //     label: __("Product Specific Exclusion", "woocommerce-catalog-enquiry"),
        //     desc: __("Select the products that should have the Add to cart button, instead of enquiry button.", "woocommerce-catalog-enquiry"),
        //     options: appLocalizer.all_products
        // },  
        // {
        //     key: "woocommerce_category_list",
        //     type: "multi-select",
        //     label: __("Category Specific Exclusion", "woocommerce-catalog-enquiry"),
        //     desc: __("Select the Category, where should have the Add to cart button, instead of enquiry button.", "woocommerce-catalog-enquiry"),
        //     options: appLocalizer.all_product_cat
        // },
        // {
        //     key: "woocommerce_tag_list",
        //     type: "multi-select",
        //     label: __("Tag Specific Exclusion", "woocommerce-catalog-enquiry"),
        //     desc: __("Select the Tag, where should have the Add to cart button, instead of enquiry button.", "woocommerce-catalog-enquiry"),
        //     options: appLocalizer.all_product_cat
        // },
        {
            key: 'grid_table',
            type: 'grid_table',
            label: __("Grid Table", "woocommerce-catalog-enquiry"),
            desc: __("Grid Table", "woocommerce-catalog-enquiry"),
            classes: 'gridTable',
            rows: [
                {
                    key: "woocommerce_userroles_list",
                    label: __('User Role', 'woocommerce-catalog-enquiry'),
                    options: appLocalizer.role_array
                },
                {
                    key: "woocommerce_user_list",
                    label: __('User Name', 'woocommerce-catalog-enquiry'),
                    options: appLocalizer.all_users
                },
                {
                    key: "woocommerce_product_list",
                    label: __('Product', 'woocommerce-catalog-enquiry'),
                    options: appLocalizer.all_products
                },
                {
                    key: "woocommerce_category_list",
                    label: __('Category', 'woocommerce-catalog-enquiry'),
                    options: appLocalizer.all_product_cat
                },
                {
                    key: "woocommerce_tag_list",
                    label: __('Tag', 'woocommerce-catalog-enquiry'),
                    options: appLocalizer.all_product_cat
                }
            ],
            columns: [
                {
                    key: "enquiry_exclusion",
                    label: __("Enquiry Exclusion", "woocommerce-catalog-enquiry")
                },
                {
                    key: "quote_exclusion",
                    label: __("Quote Exclusion", "woocommerce-catalog-enquiry")
                }
            ],
        }
    ]
};
