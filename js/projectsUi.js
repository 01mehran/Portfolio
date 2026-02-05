export function projecstBox({ src, projectIcon, projectName, demoUrl }) {
  return `
   
    <article
      class="max-w-[24em] w-full h-[24em] md:w-auto mx-auto relative md:overflow-hidden group"
      data-aos="fade-up"
    >
      <img
        src=${src}
        loading="lazy"
        class="object-fill w-full h-full rounded-t-md md:rounded-sm"
      />
    
      <div class="border-2 border-dark rounded-b-sm flex justify-between p-2 md:absolute md:hover:bg-gradient-to-b md:from-black/50 to-red md:-bottom-0 md:left-0 md:w-full md:flex-col md:justify-center md:items-center md:rounded-sm md:h-0 md:group-hover:h-full md:transition-all md:border-0 md:duration-300 overflow-hidden">
        <div class="flex items-center gap-1 overflow-hidden">
          <p class="text-xs md:text-2xl">${projectName}</p>
          <i class="bx ${projectIcon || ""} lg:text-3xl"></i>
        </div>

        <div class="flex items-center gap-1 overflow-hidden">
          <a
            href=${demoUrl}
            target="_blank"
            class="text-xs md:mt-12"
          >
            Live Demo
            <i class="bx bx-link-external"></i>
          </a>
        </div>
      </div>
    </article>
     `;
}

export function skillsBox({ skillIcon, skillName }) {
  return `   
     <article
         class="bg-dark p-4 flex flex-col items-center space-y-4 rounded-sm"
          data-aos="flip-up"
      >
        <img
          class="w-26 transform transition hover:scale-105"
          src=${skillIcon}
            alt="html-icon"
        />
        <small class="text-lg tracking-wide font-medium">${skillName}</small>
    </article>`;
}
