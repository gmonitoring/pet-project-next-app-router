'use client'

import React, { FC, PropsWithChildren } from 'react'
import { Typography } from '@mui/material'
import {
  catalogUrl,
  chatsUrl,
  favoritesUrl,
  profileUrl,
  sellUrl,
} from '@/shared/config/routes'
import MainMenuChats from 'public/icons/main_menu_chats.svg'
import MainMenuFavorites from 'public/icons/main_menu_favorites.svg'
import MainMenuHome from 'public/icons/main_menu_home.svg'
import MainMenuProfile from 'public/icons/main_menu_profile.svg'
import MainMenuWatch from 'public/icons/main_menu_watch.svg'
import { Box } from '@/shared/ui/Box/Box'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export type MainMenuItemProps = {
  title: string
  isActive: boolean
}

export const MainMenuItem: FC<MainMenuItemProps & PropsWithChildren> = ({
  title,
  isActive,
  children,
}) => {
  return (
    <Box alignItems="center" width="100%">
      <Box
        p={1}
        mb={1}
        borderRadius="8px"
        bgcolor={isActive ? 'secondary.main' : 'transparent'}
      >
        <Box color="primary.main">{children}</Box>
      </Box>
      <Typography variant="caption" color="primary.main">
        {title}
      </Typography>
    </Box>
  )
}

export const MainMenu: FC = () => {
  const pathname = usePathname()

  return (
    <Box width="100%" flexDirection="row" pb={2} bgcolor="background.default">
      <Box mr={1} width="100%">
        <Link href={{ pathname: sellUrl }}>
          <MainMenuItem
            title="Продать"
            isActive={pathname.includes(sellUrl.slice(0, -1))}
          >
            <MainMenuWatch />
          </MainMenuItem>
        </Link>
      </Box>
      <Box mr={1} width="100%">
        <Link href={{ pathname: favoritesUrl }}>
          <MainMenuItem
            title="Избранное"
            isActive={pathname.includes(favoritesUrl.slice(0, -1))}
          >
            <MainMenuFavorites />
          </MainMenuItem>
        </Link>
      </Box>
      <Box mr={1} width="100%">
        <Link href={{ pathname: catalogUrl }}>
          <MainMenuItem title="Каталог" isActive={pathname === catalogUrl}>
            <MainMenuHome />
          </MainMenuItem>
        </Link>
      </Box>
      <Box mr={1} width="100%">
        <Link href={{ pathname: chatsUrl }}>
          <MainMenuItem
            title="Сообщения"
            isActive={pathname.includes(chatsUrl.slice(0, -1))}
          >
            <MainMenuChats />
          </MainMenuItem>
        </Link>
      </Box>
      <Box mr={1} width="100%">
        <Link href={{ pathname: profileUrl }}>
          <MainMenuItem
            title="Профиль"
            isActive={pathname.includes(profileUrl.slice(0, -1))}
          >
            <MainMenuProfile />
          </MainMenuItem>
        </Link>
      </Box>
    </Box>
  )
}
