import styles from './styles.module.css'
import { ProjectCard } from '../../components/ProjectCard'
import { data } from '../../data/projects.json'

export const Projects = () => {
  return (
    <div className={styles.container} id="projetos">
        { data.map((project, key) => (
            <ProjectCard 
                key={key}
                data={project}
            />
        ))}
    </div>
  )
}
