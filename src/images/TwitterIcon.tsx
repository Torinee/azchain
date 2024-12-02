import React from 'react'

const TwitterIcon = ({ color = 'white' }) => {
    return (
        <svg
            width='33'
            height='32'
            viewBox='0 0 33 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.6665 0C7.82995 0 0.666504 7.16344 0.666504 16C0.666504 24.8366 7.82995 32 16.6665 32C25.5031 32 32.6665 24.8366 32.6665 16C32.6665 7.16344 25.5031 0 16.6665 0ZM16.2209 13.5582L16.1873 13.0046C16.0866 11.5697 16.9707 10.259 18.3697 9.75059C18.8845 9.56981 19.7575 9.54721 20.3282 9.70539C20.5521 9.77318 20.9774 9.99916 21.2795 10.2025L21.8279 10.5754L22.4323 10.3833C22.768 10.2816 23.2157 10.1121 23.4171 9.99916C23.6074 9.89747 23.7753 9.84097 23.7753 9.87487C23.7753 10.0669 23.3612 10.7223 23.0142 11.0838C22.5442 11.5923 22.6785 11.6375 23.6298 11.2985C24.2006 11.1064 24.2117 11.1064 24.0998 11.3211C24.0327 11.4341 23.6857 11.8295 23.3164 12.1911C22.6897 12.8125 22.6561 12.8803 22.6561 13.4001C22.6561 14.2023 22.2756 15.8745 21.8951 16.7897C21.19 18.5071 19.6791 20.281 18.1682 21.1736C16.0418 22.4277 13.2103 22.7441 10.8265 22.0097C10.0319 21.7611 8.66651 21.1284 8.66651 21.0154C8.66651 20.9815 9.08061 20.9363 9.58423 20.925C10.6362 20.9024 11.6883 20.6086 12.5836 20.0889L13.1879 19.7273L12.4941 19.4901C11.5092 19.1511 10.6251 18.3715 10.4012 17.6371C10.3341 17.3998 10.3565 17.3885 10.9832 17.3885L11.6323 17.3772L11.0839 17.1173C10.4348 16.7897 9.84164 16.236 9.55066 15.6711C9.33801 15.2643 9.06941 14.2362 9.14776 14.1571C9.17014 14.1232 9.40516 14.191 9.67376 14.2814C10.446 14.5638 10.5467 14.496 10.099 14.0215C9.25967 13.1628 9.00226 11.886 9.40516 10.6771L9.59542 10.1347L10.3341 10.8692C11.8449 12.3493 13.6244 13.2306 15.6613 13.4905L16.2209 13.5582Z'
                fill={color}
            />
        </svg>
    )
}

export default TwitterIcon
