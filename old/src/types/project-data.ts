export interface ProjectData {
	title: string
	type: string
	description: string
	image: string
	color: string
	link?: string
}

export interface ProjectDataWrapped {
	node: ProjectData
}
