import { AiFillHome } from "react-icons/ai";
import { FaFileContract } from "react-icons/fa";
import { MdContacts, MdTitle } from "react-icons/md";

export const rightsAndRoyaltyMenu: any = [
  {
    label: "Home",
    url: "/royalty/home",
  },
  {
    label: "Title",
    primaryNav: [
      {
        label: "Enter ISBN",
        url: "/title/title_search/edit",
      },
      {
        label: "Title View",
        url: "/title/title_search/read",
      },
      {
        label: "New Title",
        url: "/title/new_title",
      },
      {
        label: "Add Custom Title",
        url: "/title/title_search/custom_title",
      },
      {
        label: "Title-Permission",
        secNav: [
          {
            label: "Insert",
            url: "/title/title_permission_search/new",
          },
          // {
          //   label: "Update",
          //   url: "/construction_page",
          // },
          {
            label: "View",
            url: "/title/title_permission_search/read",
          },
        ],
      },
      {
        label: "Projects",
        url: "/title/projects_home",
      },
    ],
  },
  {
    label: "Contracts",
    primaryNav: [
      {
        label: "Title License",
        secNav: [
          {
            label: "Insert",
            url: "/contracts/title_license_search/new",
          },
          {
            label: "Update other details",
            url: "/contracts/title_license_search/edit",
          },
          {
            label: "Cancel",
            url: "/contracts/title_license_search/cancel",
          },
          {
            label: "View",
            url: "/contracts/title_license_search/read",
          },
        ],
      },
      {
        label: "Title License - Addendum",
        secNav: [
          {
            label: "Insert",
            url: "/contracts/title_license_addendum_search/new",
          },
          {
            label: "Update",
            url: "/contracts/title_license_addendum_search/edit",
          },
          {
            label: "View",
            url: "/contracts/title_license_addendum_search/read",
          },
        ],
      },
      {
        label: "Assignment Contract",
        secNav: [
          {
            label: "Update/Cancel",
            url: "/contracts/assingment_contract_search/edit",
          },
          {
            label: "View",
            url: "/contracts/assingment_contract_search/read",
          },
        ],
      },
      {
        label: "MultipleLink Title",
        url: "/contracts/multilple_title_search",
      },
    ],
  },
  {
    label: "Report",
    primaryNav: [
      {
        label: "Complete Title Details",
        url: "/reports/complete_title_details",
      },
      {
        label: "Addendum report",
        url: "/construction_page",
      },
      {
        label: "Report - 3",
        url: "/construction_page",
      },
      {
        label: "Report - 4",
        url: "/construction_page",
      },
      {
        label: "Report - 5",
        url: "/construction_page",
      },
      {
        label: "Report - 6",
        url: "/construction_page",
      },
      {
        label: "Report - 7",
        url: "/construction_page",
      },
    ],
  },
  {
    label: "Admin",
    primaryNav: [
      {
        label: "Author Master",
        url: "/admin/author_management_view",
      },
      {
        label: "User Master",
        url: "/admin/user_management_view",
      },
      {
        label: "Role Master",
        url: "/admin/role_management_view",
      },
      {
        label: "Department Master",
        url: "/admin/department_management_view",
      },
      {
        label: "Publication Company Master",
        secNav: [
          {
            label: "Publication Master",
            url: "/admin/publication_management_view",
          },
          {
            label: "Pub Center Master",
            url: "/admin/pub_center_view",
          },
          {
            label: "Imprints Master",
            url: "/admin/imprints_management_view",
          },
        ],
      },
    ],
  },
];

export const productsMenu: any = [
  {
    label: "Home",
    url: "/products/home",
  },
  {
    label: "Title",
    primaryNav: [
      {
        label: "New Title",
        url: "/title/new_title",
      },
      {
        label: "Multiple Series Title",
        url: "/title/multiple_series_title_search",
      },
      {
        label: "View",
        url: "/title/title_search/read",
      },
    ],
  },
  {
    label: "Contracts",
    primaryNav: [
      {
        label: "Assignment Contract",
        secNav: [
          {
            label: "Request",
            url: "/contracts/assingment_contract_search/request",
          },
          {
            label: "View",
            url: "/contracts/assingment_contract_search/read",
          },
        ],
      },
    ],
  },
  {
    label: "Author",
    primaryNav: [
      {
        label: "Author Master",
        secNav: [
          {
            label: "Insert",
            url: "/author/author_create",
          },
          {
            label: "Update",
            url: "/author/author_search/edit",
          },
          {
            label: "View",
            url: "/author/author_search/read",
          },
        ],
      },
    ],
  },
];
