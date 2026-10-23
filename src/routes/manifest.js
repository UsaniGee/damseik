/**
 * Single source of truth for public routes. Drives the router, prerendering,
 * sitemap, redirects, and per-page SEO tags.
 *
 * - `path`: canonical path (lowercase, no trailing slash).
 * - `aliases`: legacy URLs that must 301 to `path`.
 * - `indexable`: false keeps the page live but adds `noindex` and omits it from
 *   the sitemap (used for stub pages awaiting approved content).
 * - Metadata is derived from existing page copy only (spec §2.3).
 */

/**
 * @typedef {Object} RouteEntry
 * @property {string} path
 * @property {() => Promise<{ default: Function }>} load
 * @property {string} title
 * @property {string} description
 * @property {boolean} indexable
 * @property {string[]} [aliases]
 */

/** @type {RouteEntry[]} */
export const routes = [
  {
    path: '/',
    load: () => import('../Pages/LandingPage'),
    title: 'Dam Seik | Pipeline & Marine Services in Nigeria',
    description:
      'Dam Seik provides pipeline maintenance, well services, marine engineering and production chemical services for oil and gas operations in Nigeria.',
    indexable: true,
  },
  {
    path: '/about',
    load: () => import('../Pages/AboutUs'),
    title: 'About Us | Dam Seik',
    description:
      'Learn about Dam Seik: our mission, vision, and commitment to quality engineering services for the oil and gas industry in Nigeria.',
    indexable: true,
  },
  {
    path: '/careers',
    load: () => import('../Pages/Careers'),
    title: 'Careers | Dam Seik',
    description:
      'Join Dam Seik and be part of a diverse team delivering oil and gas services. Explore career opportunities and employee benefits.',
    indexable: true,
  },
  {
    path: '/contact',
    load: () => import('../Pages/ContactUS'),
    title: 'Contact Us | Dam Seik',
    description:
      'Contact Dam Seik about pipeline maintenance, well services, marine support, and other oil and gas service enquiries.',
    indexable: true,
  },
  {
    path: '/media',
    load: () => import('../Pages/Media'),
    title: 'Media | Dam Seik',
    description:
      'Images and media from projects completed by Dam Seik across pipeline services, well services, and marine engineering.',
    indexable: true,
  },
  {
    path: '/projects',
    load: () => import('../Pages/Projects'),
    title: 'Projects | Dam Seik',
    description:
      'Featured Dam Seik projects: water re-injection, well intervention, high-pressure pumping, and nitrogen lift operations across Nigeria.',
    indexable: true,
  },
  {
    path: '/services',
    load: () => import('../Pages/Services'),
    title: 'Oil & Gas Services | Dam Seik',
    description:
      'Dam Seik oil and gas services, including pipeline maintenance, well services, marine engineering, and production chemical services.',
    indexable: true,
  },
  {
    path: '/services/pipeline-facility-production-maintenace',
    load: () => import('../Pages/Services/PipelineFacility'),
    title: 'Pipeline Maintenance Services | Dam Seik',
    description:
      'Pipeline maintenance by Dam Seik: hot tapping and live repairs, cleaning and pigging, hydrotesting, dewatering, drying, and nitrogen purging.',
    indexable: true,
  },
  {
    path: '/services/marine-support-services',
    load: () => import('../Pages/Services/MarineSupport'),
    title: 'Marine Engineering & Vessel Manning | Dam Seik',
    description:
      'Marine engineering support and certified vessel crew for offshore operations: vessel manning, marine equipment procurement, and onboard maintenance.',
    indexable: true,
  },
  {
    path: '/services/well-service',
    load: () => import('../Pages/Services/WellServices'),
    title: 'Well Services | Dam Seik',
    description:
      'Well services from drilling to abandonment: wellbore cleaning and maintenance, well intervention, and coiled tubing services.',
    indexable: true,
  },
  {
    path: '/services/production-chemical-services',
    load: () => import('../Pages/Services/ProductionChemicalServices'),
    title: 'Production Chemical Services | Dam Seik',
    description:
      'Production chemical services including corrosion inhibition and scale control, from wellbore to pipeline and processing facilities.',
    indexable: true,
  },
  {
    path: '/services/equipment-leasing',
    load: () => import('../Pages/Services/EquipmentLeasing'),
    title: 'Equipment Leasing | Dam Seik',
    description: 'Equipment leasing services from Dam Seik for oil and gas operations.',
    indexable: false,
  },
  {
    path: '/services/coating-and-repair-products',
    load: () => import('../Pages/Services/CoatingAndRepair'),
    title: 'Coating and Repair Products | Dam Seik',
    description: 'Coating and repair products from Dam Seik for oil and gas operations.',
    indexable: false,
  },
  {
    path: '/services/process-instrumentation',
    load: () => import('../Pages/Services/ProcessInstrumentation'),
    title: 'Process Instrumentation | Dam Seik',
    description: 'Process instrumentation services from Dam Seik for oil and gas operations.',
    indexable: false,
  },
  {
    path: '/services/quality-control-services',
    load: () => import('../Pages/Services/QualityControl'),
    title: 'Quality Control Services | Dam Seik',
    description: 'Quality control services from Dam Seik for oil and gas operations.',
    indexable: false,
  },
  {
    path: '/services/valve-services',
    load: () => import('../Pages/Services/ValveServices'),
    title: 'Valve Services | Dam Seik',
    description: 'Valve services from Dam Seik for oil and gas operations and facilities.',
    indexable: false,
  },
  {
    path: '/services/procurement',
    load: () => import('../Pages/Services/Procurement'),
    title: 'Procurement Services | Dam Seik',
    description: 'Procurement services from Dam Seik for oil and gas operations and projects.',
    indexable: false,
  },
  {
    path: '/projects/water-re-injection-project-umusadege-1-kwale-delta-state',
    load: () => import('../Pages/Projects/WaterInjection'),
    title: 'Water Re-Injection Project, Umusadege 1, Kwale | Dam Seik',
    description:
      'Water re-injection at the Umusadege 1 wellsite in Kwale, Delta State, using two HT400 triplex pumps to support reservoir pressure maintenance.',
    indexable: true,
  },
  {
    path: '/projects/well-intervention-rivers-state',
    load: () => import('../Pages/Projects/WellIntervention'),
    title: 'UMU15 Well Intervention, Rivers State | Dam Seik',
    description:
      'Well intervention and coil tubing support at the UMU15 field, Rivers State: zone change, flow rate testing, pressure testing, and well killing.',
    indexable: true,
  },
  {
    path: '/projects/high-pressure-pumping-support-for-coil-tubing-operation-rivers-state',
    aliases: ['/projects/high-Pressure-pumping-support-for-coil-tubing-operation-rivers-state'],
    load: () => import('../Pages/Projects/HighPressurePumpProject'),
    title: 'High-Pressure Pumping for Coil Tubing, Ubima | Dam Seik',
    description:
      'High-pressure pumping support for a coil tubing operation in Ubima, Rivers State, using an HT400 triplex pump to reach a 9,615 ft target depth.',
    indexable: true,
  },
  {
    path: '/projects/nitrogen-lift-operation-cawc-well-45t-rivers-state-swamp',
    aliases: ['/projects/nitrogen-lift-operation-cawc-well-45T-rivers-state-swamp'],
    load: () => import('../Pages/Projects/NitrogenLiftProject'),
    title: 'Nitrogen Lift Operation, CAWC Well 45T | Dam Seik',
    description:
      'Nitrogen lift operation at CAWC Well 45T in the Rivers State swamp, with HT400 triplex pump support to unload the well and enable flowback.',
    indexable: true,
  },
]

/** Catch-all route; rendered for unknown URLs and prerendered as 404.html. */
export const notFoundRoute = {
  path: '*',
  load: () => import('../Pages/NotFound'),
  title: 'Page Not Found | Dam Seik',
  description: 'The page you are looking for does not exist or has moved.',
  indexable: false,
}

export const indexableRoutes = routes.filter((route) => route.indexable)

/**
 * Find the manifest entry for a pathname (case- and trailing-slash-insensitive).
 * @param {string} pathname
 * @returns {RouteEntry}
 */
export function findRoute(pathname) {
  const normalized = pathname.toLowerCase().replace(/\/+$/, '') || '/'
  return routes.find((route) => route.path === normalized) ?? notFoundRoute
}
