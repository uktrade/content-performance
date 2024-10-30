---
homepage: true
layout: product
title: Content Performance Playbook
description: Documentation and guidance to help DBT content designers and colleagues more effectively measure and evaluate the performance of content.
startButton:
  href: "get-started"
  text: Get started
---
{% from "govuk/components/phase-banner/macro.njk" import govukPhaseBanner %}

{{ govukPhaseBanner({
  tag: {
    text: "Experimental"
  },
  html: 'This is an experimental site. Help us improve it by contributing to the <a class="govuk-link" href="https://github.com/uktrade/content-performance">GitHub repository</a>.'
}) }}

## Overview

This is markdown content for everyone to see.


And this is another sentence. Really speedy

<hr class="govuk-section-break govuk-section-break--visible govuk-section-break--xl govuk-!-margin-top-0">

<div class="govuk-grid-row">
  <section class="govuk-grid-column-two-thirds">
    <h2 class="govuk-heading-m govuk-!-font-size-27">Contributions</h2>
    <p class="govuk-body">The code for Content Performance is public and contributions are welcome though the <a class="govuk-link govuk-!-font-weight-bold" href="https://github.com/uktrade/content-performance">content-performance repository on GitHub</a>.</p>
  </section>
</div>
