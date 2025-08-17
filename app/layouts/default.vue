<script setup lang="ts">
import { 
NavigationMenuContent,
 NavigationMenuItem, 
 NavigationMenuList, 
 NavigationMenuRoot, 
 NavigationMenuTrigger, 
 NavigationMenuViewport 
 } from 'reka-ui';

</script>

<template>
    <NavigationMenuRoot class="z-1 w-full h-12 content-center border">
        <!--他妈的主导航栏-->
        <div class=" flex list-none self-center space-x-4 font-mono justify-center items-center [&:>]">
            <NavigationMenuItem class="">
                <NuxtLink to="/">Home</NuxtLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NuxtLink to="/blog">Blog</NuxtLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NuxtLink to="/archive">Archive</NuxtLink>
            </NavigationMenuItem>
            <!--可收缩的About-->
            <NavigationMenuItem>
                <NavigationMenuTrigger>
                    About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul>
                        <NavigationMenuItem>
                            <NuxtLink to="/about-the-website">
                                <div class="text-green12 mb-[5px] font-medium leading-[1.2]">
                                    About Me
                                </div>
                                <p class=" text-gray-400  my-0 leading-[1.4]">
                                    Fuck
                                </p>
                            </NuxtLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NuxtLink to="/about-the-website">
                                <div class="text-green12 mb-[5px] font-medium leading-[1.2]">
                                    About The Website
                                </div>
                                <p class=" text-gray-400 my-0 leading-[1.4]">
                                    Fuck
                                </p>
                            </NuxtLink>
                        </NavigationMenuItem>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </div>
        <div class=" absolute left-0 flex w-full justify-center ">
            <NavigationMenuViewport
                class=" shadow-orange-100 border rounded-2xl"
            />
        </div>
    </NavigationMenuRoot>
    <slot />
</template>

