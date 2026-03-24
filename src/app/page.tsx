"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { LucideIcons, LetterGlitch, BorderGlow } from "@/components"
import { Icon } from "@iconify/react"
import { cn } from "@/lib/utils"
import { scrollToBySelector, scrollToByOffset } from "@/lib/scroll"

export default function Page() {
    // 个人信息
    const personalInfo = {
        name: "Jim Lin",
        title: "Full Stack Developer",
        bio: "Code in chaos, refactor yourself with discipline.",
        avatar: "/avatar.webp",
        location: "Fuzhou, Fujian, China",
    }

    // 社交链接
    const socialLinks = [
        { name: "Email", icon: <LucideIcons.Mail className="size-5" />, url: "mailto:jim.lin@nexora-studios.tech" },
        { name: "Discord", icon: <Icon icon="logos:discord-icon" className="size-5" />, url: "https://discord.com/users/1164834200860491827" },
        { name: "GitHub", icon: <Icon icon="octicon:mark-github-16" className="size-5" />, url: "https://github.com/MoYuan-CN" },
        { name: "Steam", icon: <Icon icon="simple-icons:steam" className="size-5" />, url: "https://steamcommunity.com/id/LingyunAwA-CN/" },
    ]

    const skills = [
        // 前端基础
        [
            { name: "HTML", icon: "vscode-icons:file-type-html" },
            { name: "CSS", icon: "vscode-icons:file-type-css" },
            { name: "JavaScript", icon: "vscode-icons:file-type-js" },
            { name: "TypeScript", icon: "vscode-icons:file-type-typescript" },
            { name: "Tailwind CSS", icon: "vscode-icons:file-type-tailwind" },
        ],
        // 框架
        [
            { name: "Vue", icon: "vscode-icons:file-type-vue" },
            { name: "Nuxt.js", icon: "vscode-icons:file-type-nuxt" },
            { name: "DaisyUI", icon: "logos:daisyui-icon" },
            { name: "React", icon: "vscode-icons:file-type-reactjs" },
            { name: "Next.js", icon: "vscode-icons:file-type-next" },
            { name: "ShadCN UI", icon: "vscode-icons:file-type-shadcn" },
            { name: "Wails", icon: "simple-icons:wails" },
            { name: "Tauri", icon: "vscode-icons:file-type-tauri" },
        ],
        // 后端 / 服务
        [
            { name: "Node.js", icon: "vscode-icons:file-type-node" },
            { name: "Go", icon: "vscode-icons:file-type-go" },
            { name: "Rust", icon: "vscode-icons:file-type-rust" },
            { name: "Java", icon: "vscode-icons:file-type-java" },
            { name: "Python", icon: "vscode-icons:file-type-python" },
            { name: "MySQL", icon: "vscode-icons:file-type-mysql" },
            { name: "PostgreSQL", icon: "vscode-icons:file-type-pgsql" },
        ],
        // 平台服务
        [
            { name: "Supabase", icon: "logos:supabase-icon" },
            { name: "AppWrite", icon: "devicon:appwrite" },
            { name: "Vercel", icon: "skill-icons:vercel-light" },
            { name: "Netlify", icon: "logos:netlify-icon" },
            { name: "GitHub", icon: "simple-icons:github" },
            { name: "CloudFlare", icon: "skill-icons:cloudflare-light" },
        ],
    ]

    // 项目
    const projects = [
        {
            title: "PCL-Community/PCL-CE",
            description:
                "A community edition developed as a secondary project based on PCL’s open-source code. It includes features and improvements that have not yet been implemented in the main branch.",
            tech: ["WPF", "Visual Basic"],
            link: "https://github.com/PCL-Community/PCL-CE",
        },
        {
            title: "NEXORA-Studios/Nova.CL",
            description:
                "A modern Minecraft launcher for players, offering easy search, download and management of resources via a clean interface, with quick mod, pack and version handling plus multi-instance support.",
            tech: ["Vue", "Tailwind CSS", "Rust", "Tauri"],
            link: "https://github.com/NEXORA-Studios/Nova.CL",
        },
        {
            title: "NEXORA-Studios/Voco",
            description:
                "A desktop app designed for education. It helps teachers easily manage vocabulary packs and quiz students efficiently through an intuitive interface.",
            tech: ["Vue", "Tailwind CSS", "Rust", "Tauri"],
            link: "https://github.com/NEXORA-Studios/Voco",
        },
        {
            title: "Prime-Light/SyncmaticaLand.App",
            description: "A platform for sharing Minecraft schematics — upload your builds, explore thousands of community creations, and reuse high-quality designs more efficiently to save time and spark new ideas.",
            tech: ["Next.js", "Tailwind CSS", "TypeScript"],
            link: "https://github.com/Prime-Light/SyncmaticaLand.App",
        },
        {
            title: "IntlEDU Docs",
            description: "A platform offers comprehensive IGCSE Physics course materials, including clear chapter explanations, precise concept definitions, and essential key knowledge points.",
            tech: ["Astro", "MDX", "Starlight"],
            link: "https://github.com/yun-websites/intledu-docs",
        },
    ]

    return (
        <div className="min-h-svh bg-background text-foreground">
            {/* 导航栏 */}
            <nav className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur-md">
                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    <div className="text-lg font-semibold">{personalInfo.name}&apos;s Home</div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" onClick={() => scrollToByOffset(0)}>
                            Home
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => scrollToBySelector("#skills")}>
                            Skills
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => scrollToBySelector("#projects")}>
                            Projects
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => scrollToBySelector("#contact")}>
                            Contact
                        </Button>
                    </div>
                </div>
            </nav>

            {/* 主要内容 */}
            <main className="pb-12">
                {/* 个人信息区域 */}
                <section className="relative mb-16 flex h-[calc(100vh-72px)] flex-col items-center justify-center" id="home">
                    <div className="absolute h-screen w-full blur-xs">
                        {/* Background Element */}
                        <LetterGlitch glitchSpeed={50} centerVignette={true} outerVignette={false} smooth={true} />
                    </div>

                    <div className="absolute z-10 flex h-full w-full items-center justify-center">
                        <div className="flex flex-col items-center gap-6 text-center">
                            <Avatar className="size-32 border-4 border-primary/20">
                                <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
                                <AvatarFallback>{personalInfo.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="mb-2 text-4xl font-bold">{personalInfo.name}</h1>
                                <p className="mb-4 text-xl text-muted-foreground">{personalInfo.title}</p>
                                <p className="mx-auto max-w-2xl text-muted-foreground">{personalInfo.bio}</p>
                                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                    <span>{personalInfo.location}</span>
                                </div>
                            </div>

                            {/* 社交链接 */}
                            <div className="flex gap-3">
                                {socialLinks.map((link, index) => (
                                    <Button key={index} variant="outline" size="icon" asChild>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                                            {link.icon}
                                        </a>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4">
                    <Separator className="my-16" />

                    {/* 技能区域 */}
                    <section className="mb-16" id="skills">
                        <h2 className="mb-8 text-center text-2xl font-bold">Skills</h2>
                        <div className="flex flex-col items-center gap-3">
                            {skills.map((group, idx) => (
                                <div key={idx} className="flex gap-3">
                                    {group.map((skill, index) => (
                                        <Badge key={index} variant="outline" className="px-4 py-2">
                                            <Icon icon={skill.icon} className="mr-px size-4" />
                                            {skill.name}
                                        </Badge>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </section>

                    <Separator className="my-16" />

                    {/* 项目区域 */}
                    <section className="mb-16" id="projects">
                        <h2 className="mb-8 text-center text-2xl font-bold">Projects</h2>
                        <div
                            className={cn(
                                "grid grid-cols-1 gap-6",
                                projects.length > 1 ? "md:grid-cols-2" : "",
                                projects.length > 2 ? "lg:grid-cols-3" : ""
                            )}>
                            {projects.map((project, index) => (
                                <BorderGlow
                                    key={index}
                                    edgeSensitivity={30}
                                    glowColor="40 80 80"
                                    backgroundColor="#060010"
                                    borderRadius={10.08}
                                    glowRadius={40}
                                    glowIntensity={0.9}
                                    coneSpread={5}
                                    animated={false}>
                                    <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                                        <CardContent className="px-6 pt-1 pb-7">
                                            <div className="mb-4 flex items-start justify-between">
                                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                                <Button variant="ghost" size="icon" asChild>
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View project">
                                                        <LucideIcons.ExternalLink className="size-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                            <p className="mb-4 text-muted-foreground">{project.description}</p>
                                            <div className="flex flex-wrap gap-2 absolute bottom-5">
                                                {project.tech.map((tech, techIndex) => (
                                                    <Badge key={techIndex} variant="secondary" className="text-xs">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </BorderGlow>
                            ))}
                        </div>
                    </section>

                    <Separator className="my-16" />

                    {/* 联系区域 */}
                    <section className="mb-16" id="contact">
                        <div className="rounded-xl bg-muted p-8 text-center">
                            <h2 className="mb-4 text-2xl font-bold">Get in Touch</h2>
                            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
                                Feel free to reach out if you have any questions or opportunities!
                            </p>
                            <Button size="lg" asChild>
                                <a href={`mailto:${socialLinks.find((link) => link.name === "Email")?.url}`} className="text-foreground">
                                    <LucideIcons.Mail className="mr-2 size-4" />
                                    Contact Me
                                </a>
                            </Button>
                        </div>
                    </section>
                </div>
            </main>

            {/* 页脚 */}
            <footer className="border-t border-border py-8">
                <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
