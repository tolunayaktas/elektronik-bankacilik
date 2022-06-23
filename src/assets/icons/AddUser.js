import * as React from "react"

const AddUser = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-user-plus"
        {...props}
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx={8.5} cy={7} r={4} />
        <path d="M20 8v6M23 11h-6" />
    </svg>
)

export default AddUser
